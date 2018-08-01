const autoPosition = function(moveObject, parentObject, attribute){
    const video = document.getElementById(moveObject);
    const anchor = document.getElementById(parentObject);
    const scroll = Rx.Observable.fromEvent(document, 'scroll')
    
    let iniitial_position = video.style.position
    let iniitial_top = video.style.top
    let iniitial_left = video.style.left
    let iniitial_width = video.style.width
    let iniitial_height = video.style.height
    let dragged = false

    scroll.map(e=> anchor.getBoundingClientRect().bottom < 0)
          .subscribe(bool => {
            if(bool){
                if(!dragged){
                    video.style.position = "fixed";
                    video.style.top = ((attribute || {}).top) ? attribute.top : "10px" ;
                    video.style.left = ((attribute || {}).left) ? attribute.left : "10px";
                    video.style.width = ((attribute || {}).width) ? attribute.width : "320px";
                    video.style.height = ((attribute || {}).height) ? attribute.height : "150px";
                    video.classList.add("object-fixed")
                }
            }
            else{
                dragged = false
                video.style.position = iniitial_position
                video.style.top = iniitial_top
                video.style.left = iniitial_left
                video.style.width = iniitial_width
                video.style.height = iniitial_height
                video.classList.remove("object-fixed")              
            }

    });
    const mouseDown = Rx.Observable.fromEvent(video, 'mousedown');
    const mouseUp = Rx.Observable.fromEvent(document, 'mouseup');
    const mouseMove = Rx.Observable.fromEvent(document, 'mousemove');

    mouseDown.filter(e => video.classList.contains("object-fixed"))
            .map(e=> mouseMove.takeUntil(mouseUp))
            .concatAll()
            .withLatestFrom(mouseDown,(move, down)=> {
                return {
                    x: move.clientX - down.offsetX,
                    y: move.clientY - down.offsetY,
                }
            })
            .subscribe(pos => {
                dragged = true
                video.style.top = pos.y + "px"
                video.style.left = pos.x + "px"
            })
}

