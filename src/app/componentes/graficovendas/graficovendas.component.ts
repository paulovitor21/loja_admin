import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import * as moment from 'moment';
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


  constructor(private service: PedidoService,
              private router: Router) { 
    
  }

  ngOnInit(): void {
    setInterval(() => this.recuperarGrafico(), 60000);
    this.gerarGrafico();
    this.recuperarGrafico();
  }

  public recuperarGrafico() {    
    let dataIni: string = moment().subtract(7, 'days').format("yyyy-MM-DD");
    let dataFim: string = moment().format("yyyy-MM-DD");

    this.service.recuperarTotaisDaSemana(dataIni, dataFim).subscribe(
      (res: VendasPorDataDTO[]) => {
        this.total = 0;

        while (this.totais.length) {
          this.totais.pop();
        }

        while (this.labels.length) {
          this.labels.pop();
          this.data.pop();
        }

        this.totais = res;

        this.totais.forEach(elem => {
          this.total += elem.total;
          this.data.push(elem.total);
          this.labels.push(moment(elem.data).format('DD/MM/yyyy'));
        });
        this.chart.update();
      }
    );
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
            borderColor: 'rgba(255, 148, 132, 0.2)',
            backgroundColor: 'rgba(255,148,0,0.5)'
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
