import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mc6Service } from '../../../services/Forms/mc6.service';
import { mc6 } from '../../../Models/Interfaz_mc6.ts/mc6';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-mc6',
  standalone: true,
  imports: [
    CommonModule,
  
    FormsModule
  ],
  templateUrl: './header-mc6.component.html',
  styleUrl: './header-mc6.component.css'
})
export class HeaderMc6Component {

  constructor(private mc6Service: Mc6Service) { }
  @Input() cliente: string | null = null;
  @Input() Producto_Maquina: string | null = null;
  @Input() maquina: string | null = null;
  @Input() producto_1: string | null = null;
  @Input() Producto_2: string | null = null;
  @Input() Arch_Disq: string | null = null;
  @Input() Num_Cav_th_1: number | null = null;
  @Input() Num_Cav_real_1: number | null = null;
  @Input() Num_Cav_th_2: number | null = null;
  @Input() Num_Cav_real_2: number | null = null;
  @Input() Pigmento: string | null = null;
  @Input() Porc_pigmento: number | null = null;

  @Input() Molde: string | null = null;
  @Input() Resina: string | null = null;
  @Input() estado: boolean = false;
  @Input() Fecha: string | null = null;
  

  @Output() cambioValores = new EventEmitter<any>();

  ngOnInit() {
    console.log('estadooo:', this.estado, typeof this.estado);
  }
 
  onInputChange() {
    this.cambioValores.emit({
      Arch_Disq: this.Arch_Disq,
      Num_Cav_th_2: this.Num_Cav_th_2,
      producto_2: this.Producto_2,
      Num_Cav_real_2: this.Num_Cav_real_2,
      Pigmento: this.Pigmento,
      Porc_pigmento: this.Porc_pigmento,
    });
    console.log('cambioValores:', this.Arch_Disq, this.Num_Cav_th_2, this.Num_Cav_real_2);
  }

}
