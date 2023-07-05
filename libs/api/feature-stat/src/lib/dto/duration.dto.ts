import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
export class DurationDto {
  startDate!: Date;
  endDate!: Date;
}

// @ValidatorConstraint({ name: "isBefore", async: false })
// export class IsBeforeConstraint implements ValidatorConstraintInterface {

//     validate(propertyValue: string, args: ValidationArguments) {
//         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//         return propertyValue < args.object[args.constraints[0]];
//     }

//     defaultMessage(args: ValidationArguments) {
//       return `"${args.property}" must be before "${args.constraints[0]}"`;
//     }
// }
