export default class KataGroup extends Array {
 
  static withLinks(name, kataLinks=[]) {
    var group = new KataGroup();
    group.name = name;
    kataLinks.forEach(function(g) { group.push(g); });
    group.sortByText();
    return group;
  }
  
  sortByText() {
    this.sort(function(link, link1) {
      return link.text < link1.text ? -1 : 1;
    });
  }
  
}