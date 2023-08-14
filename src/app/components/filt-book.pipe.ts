import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtBook'
})
export class FiltBookPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    const  resultPost = [];

    for(const post of value) {
      if(post.titulo.idenxOf(args) > -1){
        resultPost.push(post);
      };
    };
    return resultPost;
  }

}
