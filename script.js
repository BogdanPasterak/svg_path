const myData = {
    x: Number,
    y: Number
};
const view = {
    board: Element,
    cursor: Element,


    init: function() {
        board = document.querySelector('.board');
        cursor = document.querySelector('.cursor');
    },
    rePaint: function() {
        //console.log(board);
        cursor.setAttribute('cx', myData.x);
    }
};

window.onload = function (e) {
    console.log("Start");
    myData.x = 1;
    myData.y = 0;
    view.init();
    view.rePaint();
    document.addEventListener('keyup', (event) => {
        const key = event.key;
        let ta = document.querySelector('textarea');
        let pos = ta.selectionStart;
        myData.x++;
        view.rePaint();
        console.log(pos, ta.value );
    }, false);
}

