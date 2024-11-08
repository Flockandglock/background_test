import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

interface FormField {
    type: string;
    label: string;
    description?: string;
    required?: boolean;
    key: string;
    choices?: string[];
}


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  fields: FormField[] = []; // This will hold the JSON configuration

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      // Simulate fetching JSON data from the server
      this.fields = this.fetchFormConfig();
      this.form = this.fb.group({});
      this.fields.forEach(field => {
          this.form.addControl(field.key, new FormControl(''));
      });
  }

  fetchFormConfig() {
      return [
        {
            "type": "input",
            "label": "Name",
            "description": "Enter your full name",
            "required": true,
            "key": "name"
        },
        {
            "type": "select",
            "label": "Age Group",
            "choices": ["Under 18", "18-35", "36-50", "51+"],
            "key": "ageGroup"
        },
        {
            "type": "input",
            "label": "ячс",
            "description": "Enter your full name",
            "required": true,
            "key": "name"
        },
        {
            "type": "select",
            "label": "Age Group",
            "choices": ["Under 18", "18-35", "36-50", "51+"],
            "key": "ageGroup"
        },
        {
            "type": "number",
            "label": "Years of Experience",
            "description": "Enter your years of experience",
            "key": "experience"
        },
        {
            "type": "checkbox",
            "label": "Subscribe to newsletter",
            "key": "newsletter"
        }
    ];
  }

  getControl(key: string): FormControl {
    const control = this.form.get(key);
    if (control instanceof FormControl) {
        return control; // Return the control if it's a FormControl
    }
    return new FormControl(''); // Return a new FormControl if not found
}

  onSubmit() {
      console.log(this.form.value);
      // Handle form submission to server here
  }
}
