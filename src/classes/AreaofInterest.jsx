export default class AreaofInterest {
  projectType = "";
  description = "";
  discipline = "";
  deliveryMethod = "";
  collaborationType = "";
  region = "";
  programLength = "";
  preferredLanguage = "";
  credits = "";
  programLevel = "";
  dateRange = "";
  created = false;
  //  new version of Create Blank Interest Form contains much fewer fields - see ADO task 16485.
  // Only fields needed are projectType, collaborationType, 3 disciplines, 4 regions and project range.
  // Unneeded fields above are kept for backward compatibility.
  discipline1 = "";
  discipline2 = "";
  discipline3 = "";
  region1 = "";
  region2 = "";
  region3 = "";
  region4 = "";
  startDate = "YYYY-MM-DD";
  endDate = "YYYY-MM-DD";
}
