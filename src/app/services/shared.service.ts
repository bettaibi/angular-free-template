import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor(
        private _snackBar: MatSnackBar
    ){}

    showMsg(msg: string): void{
        this._snackBar.open(msg, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }

}