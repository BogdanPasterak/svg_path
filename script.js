const myData = {
    x: 0,
    y: 0,

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
    },
    rePaint: function () {
        //console.log(cursor);
        cursor.setAttribute('cx', myData.x);
        cursor.setAttribute('cy', myData.y);
    }
};

function keyUpEvent(event) {
    const key = event.key;
    if (key === 'Control') { return; }

    //console.log(document.activeElement);
    if (document.activeElement === document.querySelector('textarea')) {
        let pos = view.textarea.selectionStart;
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

