// makeElementDraggable.js

function makeElementDraggable(element)
{
    let state = { startX: 0, startY: 0, offsetX: 0, offsetY: 0 };

    element.addEventListener('mousedown', function(e)
    {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
            return;
        }

        e.preventDefault();

        // Store the offset between mouse click and element's top-left corner
        state.offsetX = e.clientX - element.offsetLeft;
        state.offsetY = e.clientY - element.offsetTop;

        function mouseMoveHandler(e)
        {
            if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
                return;
            }

            e.preventDefault();

            // Position the element relative to cursor, respecting initial offset
            let newLeft = e.clientX - state.offsetX;
            let newTop = e.clientY - state.offsetY;

            element.style.top = newTop + 'px';
            element.style.left = newLeft + 'px';
        }

        function mouseUpHandler()
        {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

