import {Injectable} from '@angular/core'
import {GPNBaseContent, GPNBase} from '../model/gpn_base.model'

@Injectable()
export class Local_RU{

  localize_GPNClient(case_ : GPNBase){

    if (case_.content_ru == null)
    case_.content_ru = new GPNBaseContent();

    switch (case_.content.pyStatusWork){
      case "New": case_.content_ru.pyStatusWork = "Ввод данных";
      break;
      case "Open": case_.content_ru.pyStatusWork = "Клиент идентифицирован";
      break;
    }
  }

}
