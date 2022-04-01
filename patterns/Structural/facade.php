<?php

class iconsDownloader
{

    protected $downloader;
    protected $resizer;
    protected $saver;
    protected $url;

    public function __construct(string $url) 
    {
        $this->url = $url;
        $this->downloader = 'some object';
        $this->resizer = 'some object';
        $this->saver = 'some object';
    }

    public function process(): bool
    {
        //use all objects
        return true;
    }
}

$iconsDownloader = new iconsDownloader('https://ddd.dd/img.jpg');

$iconsDownloader->process();

?>


Фасад -структурный паттер. Дает интерфейс высокого уровня, скрывая сложные реализации. Под фасадом много объектов и работы.
Дает простой интерфейс и изолирует сложность.