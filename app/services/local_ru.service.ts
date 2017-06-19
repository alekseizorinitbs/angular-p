import {Injectable} from '@angular/core'
import {GPNBaseContent, GPNBase} from '../model/gpn_base.model'
import {GPNClientContent} from '../model/gpn_client.model'

@Injectable()
export class Local_RU{

  localize_GPNClient(case_ : GPNBaseContent) : GPNBaseContent{

    console.log(case_);
    let content_ru = new GPNBaseContent();

    switch (case_.pyStatusWork){
      case "New": content_ru.pyStatusWork = "Ввод данных";
      break;
      case "Open": content_ru.pyStatusWork = "Клиент идентифицирован";
      break;
      case "Pending-External": content_ru.pyStatusWork = "Ожидаются документы";
      break;
      case "Pending-Fulfillment": content_ru.pyStatusWork = "Документы получены";
      break;
      case "Pending-Investigation": content_ru.pyStatusWork = "Клиент активирован";
      break;

    }

    return content_ru;

  }

}
