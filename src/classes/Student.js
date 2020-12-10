class Student {
  name = null;
  image = null;
  year = null;
  major = null;
  announcements = []; // array of Announcement objects
  groups = []; // array of objects with { name: , link: }
  holds = []; // array of objects with { name: , link: }
  financials = []; // array of objects with { name: , link: }
  advisor = {
    name: null,
    image: null,
  };
  academics = []; // array of objects with { name: , link: }
  courses = []; // array of StudentCourse objects
}

export default Student;
