<?php

#[Attribute(Attribute::TARGET_CLASS)]
class Listener
{
    public function __construct(
        private ?string $title,
        private ?string $desc
    ) {
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getDesc()
    {
        return $this->desc;
    }
}

#[Listener(title: 'someTitle', desc: 'someDescription')]
class somePublisher
{
}

$rC = new ReflectionClass(somePublisher::class);
$attrs = $rC->getAttributes(Listener::class);

$listener = $attrs[0]->newInstance();
echo $listener->getTitle() . '_' . $listener->getDesc();

///////////////////// generic //////

class User
{
    public function __construct(
        private string $name
    ) {
    }

    public function getName(): string
    {
        return $this->name;
    }

    /**
     * generic in docblock
     * @param string[] $names
     * @return User[] 
     */
    public function usersByNames(iterable $names): array
    {
        $res = [];
        foreach ($names as $name) {
            $res[] = new User($name);
        }
        return $res;
    }

    /**
     * generic in docblock
     * @param string[] $names
     * @return array<string, User>
     */
    public function usersByNamesAnother(iterable $names): array
    {
        $res = [];
        foreach ($names as $name) {
            $res[$name] = new User($name);
        }
        return $res;
    }
}

$u = new User('');
$names = ['a', 'b'];

$users = $u->usersByNames($names);
foreach ($users as $user) {
    $name = $user->getName();
    echo $name;
}

$users2 = $u->usersByNamesAnother($names);
foreach ($users2 as $name => $user) {
    print_r($name);
    print_r($user);
}

/**
 * @template T
 */
class Stack
{
    /**
     * @property array<T> $items
     */
    private array $items;

    /**
     * @param T $item
     */
    public function push($item): void
    {
        $this->items[] = $item;
    }

    /**
     * @return array<T>
     */
    public function getAll(): iterable
    {
        return $this->items;
    }
}

/**
 * //@var Stack<Listener> $stack
 * @var Stack<User> $stack
 */
$stack = new Stack;
$stack->push(new User(''));
print_r($stack->getAll());
