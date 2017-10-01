import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloworldWebPart.module.scss';
import * as strings from 'HelloworldWebPartStrings';
import 'reflect-metadata';
require('zone.js');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../angular4/app/AppModule';
export interface IHelloworldWebPartProps {
  description: string;
}

export default class HelloworldWebPartWebPart extends BaseClientSideWebPart<IHelloworldWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <my-app></my-app>
    `;
    platformBrowserDynamic().bootstrapModule(AppModule);

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
