export class CmpPanel1 {
  message: string;
  panel_statsState: boolean = true;
  constructor() {
    this.message = 'Hello world';
  }

  toggleStats() {
    if (this.panel_statsState) {
      document.getElementById('panel1_stats').style.display = 'flex';
      document.getElementById('flipper').style.display = 'none';
      this.panel_statsState = false;
    } else {
      document.getElementById('panel1_stats').style.display = 'none';
      document.getElementById('flipper').style.display = 'flex';
      this.panel_statsState = true;
    }

  }
}