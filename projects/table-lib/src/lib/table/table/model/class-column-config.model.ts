import {ClassColumnType} from './class-column-type.model';
import {EntityAction} from './entity-action.model';

export class ClassColumnConfig {
  property: string;
  title: string;
  type: ClassColumnType;
  values?: Array<string>;
  actions?: Array<EntityAction>
}
