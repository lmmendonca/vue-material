<template>
  <div class="page-container">
    <md-app md-mode="reveal" class="md-primary">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Sistema Habitten</span>
        <md-field class="filtro">
          <label class="filtro-buscar">Buscar</label>
          <md-input v-model="type"></md-input>
        </md-field>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>attach_money</md-icon>
            <span class="md-list-item-text">Vendas</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>
        <md-card class="card">
          <md-card-content>
            <table style="width:100%">
              <tr>
                <th class="col-1"></th>
                <th class="col-2"></th>
                <th class="col-3"></th>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  Leonardo Maximino
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Residencial Parque do Lago
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Aprovado
                </td>
              </tr>
              <tr>
                <td>
                  <md-icon>attach_file</md-icon>
                  123.123.123-23
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  Lote 1 Quadra 10
                </td>
                <td>
                  <md-icon>attach_file</md-icon>
                  25/03/2018
                </td>
              </tr>
            </table>
          </md-card-content>
        </md-card>

      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    margin-bottom: 13px;
  }
  .md-app {
    max-height: 100%;
    --md-theme-default-primary: #5C7366;
    border: 1px solid rgba(#000, .12);
  }

  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-app-content {
    height: 900px;
  }

  .filtro {
    border: 5px;
    --md-theme-default-primary: rgb(255, 255, 255);;
  }

  .filtro-buscar {
    --md-theme-default-primary: rgb(255, 255, 255);
  }
</style>

<script>
  export default {
    name: 'app',
    data: () => ({
      menuVisible: false
    })
  }
</script>
