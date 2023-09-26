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


    /**
     * @return self<>
     */
    public function getDesc()
    {
        return $this->desc;
    }
}

#[Listener(title:'someTitle', desc: 'someDescription')]
class somePublisher {

}

$rC = new ReflectionClass(somePublisher::class);
$attrs = $rC->getAttributes(Listener::class);

$listener = $attrs[0]->newInstance();
echo $listener->getTitle() .'_'.$listener->getDesc();

///////////////////// generic //////








