import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ feed }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{feed.rating}</div>
      <button className='close' onClick={() => deleteFeedback(feed.id)}>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(feed)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{feed.text}</div>
    </Card>
  );
};

export default FeedbackItem;
