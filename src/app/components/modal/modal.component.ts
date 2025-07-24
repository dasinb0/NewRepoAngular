import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule, 
    TranslateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      titleKey: string;
      summaryKey: string;
      demo: string;
      repo: string;
    },
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
