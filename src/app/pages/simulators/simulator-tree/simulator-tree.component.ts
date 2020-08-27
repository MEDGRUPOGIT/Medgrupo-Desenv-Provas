import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-simulator-tree',
  templateUrl: './simulator-tree.component.html',
  styleUrls: ['./simulator-tree.component.scss']
})
export class SimulatorTreeComponent implements OnInit {
  @Output() onChangeSimulator = new EventEmitter();
  simulatorsOptions: TreeNode[];
  nodeSelected;
  constructor(private simulatorService: SimulatorService) { }

  ngOnInit(): void {
    this.simulatorService.getSimulators()
      .subscribe(simulators => {
        this.simulatorsOptions = simulators
          .map((simulator) => {
            return {
              label: simulator.name,
              data: simulator.id,
              selectable: false,
              children: simulator.types.map((type, index) => ({
                label: type.name,
                type: 'simulator_item',
                data: {
                  simulator: simulator,
                  type: type
                }
              }))
            }
          });
      })
  }

  nodeSelect({ node }) {
    if (node.type === 'simulator_item') {
      this.onChangeSimulator.emit(node.data)
    }
  };

}
