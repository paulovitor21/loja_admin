import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { VendasPorDataDTO } from 'src/app/model/VendasPorDataDTO';
import { PedidoService } from 'src/app/servicos/pedido.service';

@Component({
  selector: 'app-graficovendas',
  templateUrl: './graficovendas.component.html',
  styleUrls: ['./graficovendas.component.css']
})
export class GraficovendasComponent implements OnInit {

  public totais: VendasPorDataDTO[] = [];
  public canvas: any;

  public total: number = 0;
  public chart: Chart;
  public labels: string[] = [];
  public data: number[] = [];


  constructor(private service: PedidoService) { 
    this.service.recuperarTotaisDaSemana().subscribe(
      (res: VendasPorDataDTO[]) => {
        this.totais = res;
      }
    );
  }

  ngOnInit(): void {
  }

  public gerarGrafico() {
    
    this.canvas = document.getElementById("meuGrafico");
    this.chart = new Chart(this.canvas,
      {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Volume de Vendas',
            data: this.data,
            borderColor: 'rgba(255, 99, 132, 0.2)',
            backgroundColor: 'rgba(255,0,0,0.5)'
          }]
        },
        options: {
          responsive: true,
          scales: {
            yAxis: {
              beginAtZero: true
            }
          }
        }
      });
  }

}
