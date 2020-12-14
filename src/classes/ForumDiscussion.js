export default class ForumDiscussion {
  title = null;
  startedBy = null;
  startedByImage = null;
  createdTimeStamp = null;
  lastPostName = null;
  lastPostImage = null;
  lastPostTimeStamp = null;
  numReplies = null;
  posts = []; // array of Post objects

  setForumDiscussion(forumDiscussion) {
    this.title = forumDiscussion.title;

    this.startedBy = forumDiscussion.startedBy;
    this.startedByImage = forumDiscussion.startedByImage;
    this.createdTimeStamp = forumDiscussion.createdTimeStamp;
    this.lastPostName = forumDiscussion.lastPostName;
    this.lastPostImage = forumDiscussion.lastPostImage;
    this.lastPostTimeStamp = forumDiscussion.lastPostTimeStamp;
    this.numReplies = forumDiscussion.numReplies;
    this.posts = forumDiscussion.posts;
  }
}

export class Post {
  postName = null;
  image = null;
  postDate = null;
  comment = null;
}
