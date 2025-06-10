import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import type { Observable } from 'rxjs';
import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';

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
