import React from "react";
import FeedPage from "../../component/feed/FeedPage";

// const MemoizeFlyButton = React.memo(FlyButton);
const MemoizeFeedPage = React.memo(FeedPage);

const Feed = ({ componentId }) => {
  return (
    <>
      <MemoizeFeedPage componentId={componentId} />
    </>
  );
};

export default React.memo(Feed);
