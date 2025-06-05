import {
  type CallHandler,
  type ExecutionContext,
  Injectable,
  type NestInterceptor,
} from '@nestjs/common';
import type { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  code: number;
  success: true;
  message: string;
  data: T;
  timestamp: number;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<{ statusCode: number }>();
    const code = response.statusCode;
    return next.handle().pipe(
      map((data: T) => ({
        code,
        data,
        success: true,
        message: '操作成功',
        timestamp: Date.now(),
      })),
    );
  }
}
