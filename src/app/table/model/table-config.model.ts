import {EntityColumnConfig} from "./entity-column-config.model";
import {ClassColumnConfig} from "./class-column-config.model";

export class TableConfig {
  entityCols: Array<EntityColumnConfig>;
  classCols: Array<ClassColumnConfig>;
}
