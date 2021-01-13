export default class Template {
  coverImage = "";
  type = ""; // Course Development or Bookmark
  title = "";
  description = "";

  setTemplate(template) {
    this.coverImage = template.coverImage;
    this.type = template.type;
    this.title = template.title;
    this.description = template.description;
  }
}
