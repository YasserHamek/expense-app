import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class ConstumInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('This is intercepting the request, context : ', context);
    return next
      .handle()
      .pipe(
        map((returnData) =>
          console.log(
            'This is intercepting the request, returned Data : ',
            returnData,
          ),
        ),
      );
  }
}
