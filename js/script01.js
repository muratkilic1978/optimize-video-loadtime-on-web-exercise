if( offsetTop <= 840 && offsetTop > -240) {
    videoIst.play();
} else if ( offsetBottom < 250 || offsetBottom > 1390) {
    videoIst.pause();
}

if ( parisArea.getBoundingClientRect().top > 585 || parisArea.getBoundingClientRect().bottom < 58 )
{
    audPa.pause();
} else
{
    audPa.play();
}

if ( istanbulArea.getBoundingClientRect().top > 685 || istanbulArea.getBoundingClientRect().bottom < 58 )
{
    audIst.pause();
} else
{
    audIst.play();
}

if ( firenzeArea.getBoundingClientRect().top > 585 || firenzeArea.getBoundingClientRect().bottom < 58 )
{
    audFir.pause();
} else
{
    audFir.play();
}