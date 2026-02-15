// makeInterface.js

function makeInterface()
{
    let textureFiles = [];

    let counter = 0;

    let rezPositionLeft = 100;
    let rezPositionTop = 5;

    let textureHeight = 350;

    let layer = 1000;

    if (ge('textureChooser'))
    {
        ge('textureChooser').remove();
    }

    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.style.zIndex = layer;
    mainDiv.title = 'mainDiv';
    mainDiv.style.width = 100 + 'px';
    ba(mainDiv);

    //-//

    mainDiv.append(makeTitleOfApp());

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let textureNumber = ce('div');
    textureNumber.id = 'textureNumber';
    textureNumber.textContent = '0';
    textureNumber.style.marginLeft = '8px';
    textureNumber.style.fontWeight = 'bold';
    mainDiv.append(textureNumber);

    //-//

    let characterInput = ce('input');
    characterInput.type = 'file';
    characterInput.multiple = true;
    characterInput.id = 'textureChooser';
    characterInput.style.display = 'none';
    characterInput.onchange = function(event)
    {
        inputSound();

        textureFiles = event.target.files;

        if (textureFiles && textureFiles.length > 0)
        {
            // remove any existing theTexture
            if (ge('theTexture'))
            {
                ge('theTexture').remove();
            }

            // make theTexture
            let theTexture = ce('img');
            theTexture.id = 'theTexture';

            theTexture.src = URL.createObjectURL(textureFiles[0]);

            theTexture.style.position = 'absolute';
            theTexture.style.left = rezPositionLeft + 'px';
            theTexture.style.top = rezPositionTop + 'px';
            theTexture.style.zIndex = 1000;
            theTexture.style.height = textureHeight + 'px';

            ba(theTexture);
            makeElementDraggable(theTexture);
        }
    };
    mainDiv.append(characterInput);

    //-//

    let openTextureBtn = ce('button');
    openTextureBtn.textContent = 'Choose Textures';
    openTextureBtn.style.lineHeight = '12px';
    openTextureBtn.style.width = '85px';
    openTextureBtn.title = 'Choose Multiple Textures';
    openTextureBtn.style.alignSelf = 'flex-start';
    openTextureBtn.onmouseover = function()
    {
        hoverSound();
    };
    openTextureBtn.onclick = function()
    {
        clickSound();
        characterInput.click();
    };
    mainDiv.append(openTextureBtn);

    //-//

    let backButton = ce('button');
    backButton.id = 'backButton';
    backButton.textContent = '<=';
    backButton.onmouseover = function()
    {
        hoverSound();
    };
    backButton.onclick = function()
    {
        if (counter > 0)
        {
            clickSound();

            counter -= 1;

            ge('textureNumber').textContent = counter;

            ge('theTexture').src = URL.createObjectURL(textureFiles[counter]);
        }
    };
    mainDiv.append(backButton);

    //-//

    let forwardButton = ce('button');
    forwardButton.id = 'forwardButton';
    forwardButton.textContent = '=>';
    forwardButton.onmouseover = function()
    {
        hoverSound();
    };
    forwardButton.onclick = function()
    {
        if (counter < textureFiles.length - 1)
        {
            clickSound();

            counter += 1;

            ge('textureNumber').textContent = counter;

            ge('theTexture').src = URL.createObjectURL(textureFiles[counter]);
        }
    };
    mainDiv.append(forwardButton);

    //-//

    let randomButton = ce('button');
    randomButton.textContent = 'Random';
    randomButton.onmouseover = function()
    {
        hoverSound();
    };
    randomButton.onclick = function()
    {
        // remove any existing theTexture
        if (ge('theTexture'))
        {
            clickSound();
            ge('theTexture').remove();
        }

        let randomNumber = Math.floor(Math.random() * textureFiles.length);

        counter = randomNumber;

        // make theTexture
        let theTexture = ce('img');
        theTexture.src = URL.createObjectURL(textureFiles[randomNumber]);
        theTexture.id = 'theTexture';
        theTexture.style.position = 'absolute';

        theTexture.style.zIndex = layer;

        theTexture.style.left = rezPositionLeft + 'px';
        theTexture.style.top = rezPositionTop + 'px';

        theTexture.style.height = textureHeight + 'px';
        ba(theTexture);

        ge('textureNumber').textContent = randomNumber;

        makeElementDraggable(theTexture);
    };
    mainDiv.append(randomButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

