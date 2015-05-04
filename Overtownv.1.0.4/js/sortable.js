function sortable(rootEl, onUpdate){
    var dragEl;
    
    // ?????? ???? ????? ????????????????
    [].slice.call(rootEl.children).forEach(function (itemEl){
        itemEl.draggable = true;
    });
    
    // ??????? ?????????? ?? ??????????
    function _onDragOver(evt){
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
       
        var target = evt.target;
        if( target && target !== dragEl && target.nodeName == 'LI' ){
            // ?????????
            rootEl.insertBefore(dragEl, target.nextSibling || target);
        }
    }
    
    // ????????? ??????????
    function _onDragEnd(evt){
        evt.preventDefault();
       
        dragEl.classList.remove('ghost');
        rootEl.removeEventListener('dragover', _onDragOver, false);
        rootEl.removeEventListener('dragend', _onDragEnd, false);

        // ???????? ?? ????????? ??????????
        onUpdate(dragEl);
    }
    
    // ?????? ??????????
    rootEl.addEventListener('dragstart', function (evt){
        dragEl = evt.target; // ?????????? ??????? ??????? ????? ??????????
        
        // ???????????? ??? ??????????????
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('Text', dragEl.textContent);

        // ???????????? ?? ??????? ??? dnd
        rootEl.addEventListener('dragover', _onDragOver, false);
        rootEl.addEventListener('dragend', _onDragEnd, false);

        setTimeout(function (){
            // ???? ????????? ?????? ???????? ??? setTimeout, ??
            // ??????????????? ??????, ????? ????? ???? ?????.
            dragEl.classList.add('ghost');
        }, 0)
    }, false);
}
                        
// ??????????                    
sortable( document.getElementById('list'), function (item){
    console.log(item);
});