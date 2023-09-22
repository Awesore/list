import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import '../App.css';

function Comment({ selectedList, comments, setComments }) {
    const [newComment, setNewComment] = useState('');
    const [commentColors, setCommentColors] = useState({}); // Зберігатимемо кольори для кожного коментаря окремо

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const color = commentColors[newComment] || '#000000'; // Отримуємо колір для коментаря або використовуємо значення за замовчуванням
            const newCommentList = [...(comments || []), newComment];
            setComments(newCommentList);
            setNewComment('');
            setCommentColors({ ...commentColors, [newComment]: color }); // Зберігання кольору для нового коментаря
        }
    };

    const handleColorChange = (color) => {
        setCommentColors({ ...commentColors, [newComment]: color.hex }); // Оновлення кольора для нового коментаря
    };

    return (
        <div className="comment">
            <h2>Comments: {selectedList}</h2>

            <ul>
                {comments &&
                    comments.map((comment, index) => (
                        <li className="comments-list" key={index}>
              <span
                  className="comment-color"
                  style={{ backgroundColor: commentColors[comment] || '#000000' }}
              ></span>
                            {comment}
                        </li>
                    ))}
            </ul>

            <div className="down-comment">
        <textarea
            type="text"
            placeholder="Type Comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required="required"
        ></textarea>

                <button className="btn" onClick={handleAddComment}>
                    Add New Comments
                </button>

                <div className="pl-10">
                    <SketchPicker
                        color={commentColors[newComment] || '#000000'}
                        onChangeComplete={handleColorChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Comment;

