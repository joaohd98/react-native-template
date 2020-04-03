import {RulesType} from "./rules-type";
import {Rules} from "./rules";

type typesKeyboard = "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";

export enum FormInputStatus {
  none,
  valid,
  invalid,
}

export class FormInput {
  private _value = "";
  private _isFocused = false;
  private _status: FormInputStatus = FormInputStatus.none;
  private _warningMessage: string | undefined = undefined;
  private _type = "text";
  private _keyboardType: typesKeyboard = "default";
  private _isPassword = false;
  private _changeInput: (value: FormInput) => void = () => {};
  private _rules: {
    type: RulesType;
    message?: string;
  }[] = [];

  constructor(init?: Partial<FormInput>) {
    Object.assign(this, init!);
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.changeInput(this);
    this.checkValid();
  }

  get isFocused(): boolean {
    return this._isFocused;
  }

  set isFocused(value: boolean) {
    this._isFocused = value;
    this.changeInput(this);
  }

  get status(): FormInputStatus {
    return this._status;
  }

  set status(value: FormInputStatus) {
    this._status = value;
  }

  get warningMessage(): string | undefined {
    return this._warningMessage;
  }

  set warningMessage(value: string | undefined) {
    this._warningMessage = value;
  }

  get rules(): {type: RulesType; message?: string}[] {
    return this._rules;
  }

  set rules(value: {type: RulesType; message?: string}[]) {
    this._rules = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get isPassword(): boolean {
    return this._isPassword;
  }

  set isPassword(value: boolean) {
    this._isPassword = value;
  }

  get keyboardType(): typesKeyboard {
    return this._keyboardType;
  }

  set keyboardType(value: typesKeyboard) {
    this._keyboardType = value;
  }

  get changeInput(): (value: FormInput) => void {
    return this._changeInput;
  }

  set changeInput(value: (value: FormInput) => void) {
    this._changeInput = value;
  }

  checkValid() {
    this.status = FormInputStatus.valid;
    this.warningMessage = undefined;

    for (const validator of this.rules) {
      if (!Rules.validate(validator.type, this.value)) {
        this.status = FormInputStatus.invalid;
        this.warningMessage = validator.message;
        break;
      }
    }

    this.changeInput(this);
  }
}
