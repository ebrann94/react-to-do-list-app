import React from 'react';

const PlaceHolder = document.createElement('li');
PlaceHolder.className = 'list__placeholder';

const ReOrderableList = ({ items, renderItem, className, handleReorder }) => {
    const PlaceHolder = document.createElement('li');
    PlaceHolder.className = 'list__placeholder';

    let dragged = null;
    let over = null;
    let prevClientY = null;
    let firstMove = false;

    const dragStart = e => {
        dragged = e.currentTarget;

        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", dragged);

        prevClientY = e.clientY;
        firstMove = true;
    };

    const dragOver = e => {
        e.preventDefault();

        if (firstMove) {
            dragged.style.display = 'none';
            const closestLi = e.target.closest('.task');
            closestLi.parentNode.insertBefore(PlaceHolder, closestLi.nextSibling);
            firstMove = false;
        }

        if (e.target.className === 'list__placeholder' || e.target.className !== 'task') return;
        over = e.target;

        if (e.clientY > prevClientY) {
            e.target.parentNode.insertBefore(PlaceHolder, e.target.nextSibling);
        } else if (e.clientY < prevClientY ) {
            e.target.parentNode.insertBefore(PlaceHolder, e.target);
        }

        prevClientY = e.clientY;
    };

    const dragEnd = () => {
        dragged.style.display = 'flex';
        dragged.parentNode.removeChild(PlaceHolder);

        if (!over) return;

        const data = items;
        const from = Number(dragged.dataset.index);
        const to = Number(over.dataset.index);
        data.splice(to, 0, data.splice(from, 1)[0]);
        handleReorder(data);
    };
    return (
        <ul
            className={className}
            onDragEnter={dragOver}
        >
            {
                items.map((item, i) => (
                    renderItem({
                        ...item,
                        dragStart,
                        dragEnd,
                        index: i
                    })
                ))
            }
        </ul>
    )
};

export default ReOrderableList;