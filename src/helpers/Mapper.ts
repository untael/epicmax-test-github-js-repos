import { plainToClass, classToPlain } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'

const mapConfig = {
  excludeExtraneousValues: true,
  enableImplicitConversion: true,
}

export default class Mapper {
  map<T, V> (cls: ClassType<T>, plain: V | V[]): T {
    return plainToClass(cls, plain, mapConfig)
  }

  transform<T> (object: T[]): Record<string, any> {
    return classToPlain(object)
  }
}

