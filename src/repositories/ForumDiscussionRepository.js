// returns an array of post objects for the Discussion with id discussionId

import ForumDiscussion from "../classes/ForumDiscussion.js";

export const getForumDiscussion = function (discussionId) {
  let forumDiscussion = new ForumDiscussion();

  const searchResultBeforeAdd = {
    title: "Are ethical and legal the same thing",
    startedBy: "Bradley Dexter",
    startedByImage: "images/bradley.png",
    createdTimeStamp: "2020-03-06 10:02 AM",
    lastPostName: "Victoria Banks",
    lastPostImage: "images/Victoria.png",
    lastPostTimeStamp: "2020-03-09 12:17 PM",
    numReplies: "1",
    posts: [
      {
        image: "images/bradley.png",
        postName: "Bradley Baxter",
        postDate: "2020-03-06 10:02 AM",
        comment:
          "It's time for us to discern what constitutes 'ethical.' Are being ethical and legal always the same thing? Can you be ethical, yet be acting illegally according to the law? Can you be acting legally yet unethically?",
      },
      {
        image: "images/Victoria.png",
        postName: "Victoria Banks",
        postDate: "2020-03-09 12:17 PM",
        comment:
          "I guess I always thought/assumed ethical and legal are the same thing. The first two chapters of our book made me realize they aren't.",
      },
    ],
  };

  const searchResultAfterAdd = {
    title: "Are ethical and legal the same thing",
    startedBy: "Bradley Dexter",
    startedByImage: "images/bradley.png",
    createdTimeStamp: "2020-03-06 10:02 AM",
    lastPostName: "Victoria Banks",
    lastPostImage: "images/Victoria.png",
    lastPostTimeStamp: "2020-03-09 12:17 PM",
    numReplies: "1",
    posts: [
      {
        image: "images/bradley.png",
        postName: "Bradley Baxter",
        postDate: "2020-03-06 10:02 AM",
        comment:
          "It's time for us to discern what constitutes 'ethical.' Are being ethical and legal always the same thing? Can you be ethical, yet be acting illegally according to the law? Can you be acting legally yet unethically?",
      },
      {
        image: "images/Victoria.png",
        postName: "Victoria Banks",
        postDate: "2020-03-09 12:17 PM",
        comment:
          "I guess I always thought/assumed ethical and legal are the same thing. The first two chapters of our book made me realize they aren't.",
      },
      {
        image: "images/Brittany.png",
        postName: "Brittany Simms",
        postDate: "Wed, Mar 11, 2020, 3:34 PM",
        comment:
          "Ditto @Victoria Banks. The example in Chapter 2 of the employees who stole medicine from the PharmCorp warehouse to help people in their village because it was priced too high made me realize that PharmCorp went there for cheap labor but still wanted to make huge profits off their prescriptions. Legal? Yes. Ethical? Umm, no…",
      },
    ],
  };

  switch (discussionId) {
    case 1:
      forumDiscussion.setForumDiscussion(searchResultBeforeAdd);
      break;
    case 2:
      forumDiscussion.setForumDiscussion(searchResultAfterAdd);
      break;
    default:
  }

  return forumDiscussion;
};
