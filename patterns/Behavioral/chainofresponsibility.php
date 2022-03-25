Цепочка обязанностей - паттерн поведения. Процесс передается по цепочке, на каждом этапе запрос обрабатывается и решается,
передавать ли его дальше.

middleware - лучший пример. PSR-15 промежуточные обработчики HTTP
<?php

abstract class Middleware
{

    private $next;

    public function linkWith(Middleware $next): Middleware
    {
        $this->next = $next;
        return $next;
    }

    public function check(array $request): bool
    {
        if (!$this->next) return true;

        return $this->next->check($request);
    }
}

class RoleMiddleware extends Middleware
{

    public function check(array $request): bool
    {
        if ($request['role'] <> 'admin') {
            return false;
        }

        return parent::check($request);
    }
}

class MoneyMiddleware extends Middleware
{

    public function check(array $request): bool
    {
        if ($request['balance'] <= 0) {
            return false;
        }

        return parent::check($request);
    }
}

class IpMiddleware extends Middleware
{

    public function check(array $request): bool
    {
        if ($request['ip'] == '127.0.0.1') {
            return false;
        }

        return parent::check($request);
    }
}

class Server
{

    private $middleware;

    public function setMiddleware(Middleware $middleware): void
    {
        $this->middleware = $middleware;
    }

    public function process(array $request): bool
    {
        return $this->middleware->check($request);
    }
}

$request = [
    'role' => 'admin',
    'balance' => 100,
    'ip' => '45.34.45.66',
];

$middleware = new RoleMiddleware();
$middleware
    ->linkWith(new MoneyMiddleware())
    ->linkWith(new IpMiddleware());

$server = new Server();
$server->setMiddleware($middleware);

$res = $server->process($request);
echo $res ? 1 : 0;
