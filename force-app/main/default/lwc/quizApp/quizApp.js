/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 08-29-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {}; // for storing answers
    countRightAnswers = 0; //to show the number of correct answers
    isSubmitted = false; // use to show the result

    // for applying dynamic styling to text-result
    get isScoredFull() {
        return `slds-text-heading_large slds-text-align_center slds-m-around_large ${this.countRightAnswers === this.myQuestions.length ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    //used for disabling the submit button
    get ifNotAllSelected() {
        return this.myQuestions.length !== Object.keys(this.selected).length;
    }

    myQuestions = [
        {
            id: "Question 1",
            question: "The IT Director of Cosmic Solution would like to prevent Cross-Site Forgery (CSRF) attacks on the company's website. Which of the following is the specific defense mechanism provided by Salesforce that can prevent these attacks?",
            answers: {
                a: "Anti-CSRF Token",
                b: "Security Token",
                c: "CSRF Protection",
                d: "Anti-CSRF Security"
            },
            correctAnswer: "a"
        },
        {
            id: "Question 2",
            question: "Cosmic Software Solution uses Salesforce for lead management. The record page created for leads consists of several custom fields and sections. They need to be configured as individual components such that different types of users only see the fields and sections that they require. For example, a section consisting of five custom fields, which allow specifying contact information, should  only be visible to seles users. Which feature should be used to meet this requirement?",
            answers: {
                a: "Page Layouts",
                b: "Dynamic Forms",
                c: "Lightning Web Component",
                d: "Dynamic Interactions"
            },
            correctAnswer: "b"
        },
        {
            id: "Question 3",
            question: "Which resource in an Aura component bundle can used to define a custom icon for the component that apeers in Lightning Builder or Experience Builder?",
            answers: {
                a: "Helper",
                b: "Design",
                c: "SVG File",
                d: "CSS Styles"
            },
            correctAnswer: "c"
        },
    ]

    // changeHandler get's called on every click on the options
    changeHandler(event) {
        const { name, value } = event.target;
        this.selected = { ...this.selected, [name]: value };
    }

    //form submit handler
    submitHandler(event) {
        event.preventDefault();
        let result = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer);
        console.log(result);

        this.countRightAnswers = result.length;
        console.log(this.countRightAnswers);
        this.isSubmitted = true;
    }

    //form reset handler
    resetHandler() {
        this.selected = {};
        this.countRightAnswers = 0;
        this.isSubmitted = false;
    }
}