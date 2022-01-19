import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((feed) => {
          return (
            <motion.div
              key={feed.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={feed.id} {...feed} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((feed) => {
  //       return (
  //         <FeedbackItem key={feed.id} {...feed} handleDelete={handleDelete} />
  //       );
  //     })}
  //   </div>
  // );
};

export default FeedbackList;
