import {Injectable} from '@angular/core'
import {GPNBaseContent, GPNBase} from '../model/gpn_base.model'
import {GPNClientContent} from '../model/gpn_client.model'

@Injectable()
export class Local_RU{

  localize_GPNClient(case_ : GPNBase) : GPNBaseContent{

    let content_ru = new GPNBaseContent();

    switch (case_.content.pyStatusWork){
      case "New": content_ru.pyStatusWork = "Ввод данных";
      break;
      case "Open": content_ru.pyStatusWork = "Клиент идентифицирован";
      break;
      case "Pending-External": content_ru.pyStatusWork = "Ожидаются документы";
      break;
    }

    return content_ru;

  }

}
