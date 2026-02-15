// handleTextureKeys.js

function handleTextureKeys(event)
{
    // check for Left Arrow
    if (event.code === 'ArrowLeft')
    {
        // stops page from scrolling left
        event.preventDefault();

        let backBtn = ge('backButton');
        
        if (backBtn)
        {
            backBtn.click();
        }
    } 
    // check for Right Arrow
    else if (event.code === 'ArrowRight')
    {
        // stops page from scrolling right
        event.preventDefault();

        let fwdBtn = ge('forwardButton');

        if (fwdBtn)
        {
            fwdBtn.click();
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

