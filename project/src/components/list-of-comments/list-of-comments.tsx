import { Comment } from '../../types/comment';
import CommentElement from '../comment/comment';

type ListOfCommentsProps = {
  comments: Comment[];
};

function ListOfComments({ comments }: ListOfCommentsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.slice(0,10).map((item) => (
        <CommentElement comment={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ListOfComments;
