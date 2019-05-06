const myData = {
    x: 0,
    y: 0,
    l: 'M',
    count: 0,

    init: () => {
        //console.log("Start");
        x = 0;
        y = 0;
    }
};
const view = {

    init: function () {
        board = document.querySelector('.board');
        cursor = document.querySelector('.cursor');
        textarea = document.querySelector('textarea');
        xView = document.querySelector('.x-view');
        yView = document.querySelector('.y-view');
        lView = document.querySelector('.l-view');
    },
    rePaint: function () {
        //console.log(cursor);
        lView.innerText = myData.l;
        cursor.setAttribute('cx', myData.x);
        xView.innerText = myData.x;
        cursor.setAttribute('cy', myData.y);
        yView.innerText = myData.y;
    },
    addStep: function (text) {
        if (text.length > 0) {
            myData.l = "";
            myData.count = 0;
            textarea.value += text;
            textarea.value += "\n";
        }
    }
};

function keyUpEvent(event) {
    const key = event.key;
    if (key === 'Control') { return; }
    if (key === 'Shift') { return; }

    //console.log(document.activeElement);
    if (document.activeElement === document.querySelector('textarea')) {
        let pos = view.textarea.selectionStart || 0;
        console.log(pos, view.textarea.value);
    } else {
        let change = true;
        if (key == 'ArrowRight') {
            if (event.ctrlKey && myData.x <= 95)
                myData.x += 5;
            else if (myData.x < 100)
                myData.x++;
        } else if (key == 'ArrowLeft') {
            if (event.ctrlKey && myData.x >= 5)
                myData.x -= 5;
            else if (myData.x > 0)
                myData.x--;
        } else if (key == 'ArrowUp') {
            if (event.ctrlKey && myData.y >= 3)
                myData.y -= 3;
            else if (myData.y > 0)
                myData.y--;
        } else if (key == 'ArrowDown') {
            if (event.ctrlKey && myData.y <= 17)
                myData.y += 3;
            else if (myData.y < 20)
                myData.y++;
        } else if ('MmLlHhVvCcSsQqTtAaZz'.split('').includes(key)) {
            myData.l = key;
        } else if (key == 'Enter') {
            // add to list of command
            let text = '';
            if (myData.l == 'Z' || myData.l == 'z') {
                text = 'Z';
            } else if (myData.l == 'C' || myData.l == 'c') {
                if (myData.count == 0) {
                    ;
                    myData.count++;
                } else if (myData.count == 1) {
                    ;
                    myData.count++;
                } else {
                    ;
                }
            } else if (myData.l == 'S' || myData.l == 's' || myData.l == 'Q' || myData.l == 'q' || myData.l == 'A' || myData.l == 'a') {
                if (myData.count == 0) {
                    ;
                    myData.count++;
                } else {
                    ;
                }
            } else {
                text = myData.l + " " + myData.x + " " + myData.y;
            }
            view.addStep(text);    
        } else {
            console.log(key);
            change = false;
        }

        if (change) {
            view.rePaint();
        }
    }
    view.rePaint();
}

window.onload = function (e) {
    //myData.init();
    view.init();
    view.rePaint();
    document.addEventListener('keyup', keyUpEvent, false);
}

