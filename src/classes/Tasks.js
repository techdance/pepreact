export default class Task {
  id = null;
  projectId = null; // foreign key that points to some ProjectLab type object - e.g. ProjectLabCourse or ProjectLabCertificate or something else.
  step = null; // Tasks can belong to "steps" or "milestones" within a ProjectLab type object - e.g. ProjewctLabCourse has Course Information, Design and Activity
  name = null;
  dueDate = null;
  status = null;
  assignedTo = null;

  setTask(task) {
    this.id = task.id;
    this.projectId = task.projectId;
    this.step = task.step;
    this.name = task.name;
    this.dueDate = task.dueDate;
    this.status = task.status;
    this.assignedTo = task.assignedTo;
  }
}
