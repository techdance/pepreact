export default class Template {
  id = "";
  coverImage = ""; // image to show in Template Tiles
  type = ""; // Course Development or Bookmark
  category = ""; // category is under type; For Course Development, this is Course or Syllabus
  title = "";
  description = "";
  author = "";
  state = ""; // Published or Draft
  date = ""; // published date (state=Published) or last edited date (state=Draft)
  resourceFile = "";

  setTemplate(template) {
    this.coverImage = template.coverImage;
    this.type = template.type;
    this.title = template.title;
    this.description = template.description;
  }
}
