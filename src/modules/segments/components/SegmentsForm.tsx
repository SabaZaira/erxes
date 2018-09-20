import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Icon
} from 'modules/common/components';
import { __, generateRandomColorCode } from 'modules/common/utils';
import { Wrapper } from 'modules/layout/components';
import { ContentSpace, FlexContent, FlexItem } from 'modules/layout/styles';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ISegment, ISegmentCondition } from '../types';
import { AddConditionButton, Conditions } from './';
import {
  ConditionWrapper,
  ResultCount,
  SegmentContainer,
  SegmentResult,
  SegmentTitle,
  SegmentWrapper
} from './styles';

type SegmentDoc = {
  name: string,
  description: string,
  subOf: string,
  color: string,
  connector: string,
  conditions: ISegmentCondition[],
}

type Props = {
  contentType: string,
  fields: any[],
  create: (params: { doc: SegmentDoc }) => void,
  edit: (params: { _id: string, doc: SegmentDoc }) => void,
  segment: ISegment,
  headSegments: ISegment[],
  count: (segment: any) => void,
  total: any
};

type State = {
  name: string,
  description: string,
  subOf: string,
  color: string,
  conditions: ISegmentCondition[],
  connector: string,
}

class SegmentsForm extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = props.segment || {
      name: '',
      description: '',
      subOf: '',
      color: generateRandomColorCode(),
      conditions: [],
      connector: 'any'
    };

    if (props.segment) {
      props.count(props.segment);
    }

    this.addCondition = this.addCondition.bind(this);
    this.changeCondition = this.changeCondition.bind(this);
    this.removeCondition = this.removeCondition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  addCondition(condition) {
    this.setState({
      conditions: [...this.state.conditions, condition]
    });
  }

  changeCondition(condition) {
    this.setState({
      conditions: this.state.conditions.map(
        c => (c.field === condition.field ? condition : c)
      )
    });

    const {
      name,
      description,
      subOf,
      color,
      conditions,
      connector
    } = this.state;

    const segment = {
      name,
      description,
      subOf,
      color,
      conditions,
      connector
    };

    this.props.count(segment);
  }

  removeCondition(conditionField) {
    this.setState({
      conditions: this.state.conditions.filter(c => c.field !== conditionField)
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  save(e) {
    e.preventDefault();

    const { segment, create, edit } = this.props;

    const {
      name,
      description,
      subOf,
      color,
      connector,
      conditions
    } = this.state;

    const doc = { name, description, color, connector, conditions, subOf: '' };

    if (subOf) {
      doc.subOf = subOf;
    }

    if (segment) {
      edit({ _id: segment._id, doc })
    } else {
      create({ doc });
    }
  }

  renderConditions() {
    const { contentType, fields } = this.props;
    const { conditions, connector, subOf } = this.state;

    const selectedFieldIds = conditions.map(c => c.field);

    // Exclude fields that are already selected
    const changedFields = fields.filter(
      field => selectedFieldIds.indexOf(field._id) < 0
    );

    return (
      <Fragment>
        <ConditionWrapper>
          <FormGroup>
            {__('Users who match')}
            <FormControl
              name="connector"
              componentClass="select"
              value={connector}
              onChange={this.handleChange}
            >
              <option value="any">{__('any')}</option>
              <option value="all">{__('all')}</option>
            </FormControl>
            {__('of the below conditions')}
          </FormGroup>

          <Conditions
            contentType={contentType}
            fields={fields}
            parentSegmentId={subOf}
            conditions={conditions}
            changeCondition={this.changeCondition}
            removeCondition={this.removeCondition}
          />
        </ConditionWrapper>

        <AddConditionButton
          fields={changedFields}
          addCondition={this.addCondition}
        />
      </Fragment>
    );
  }

  renderSubOf() {
    return (
      <FormGroup>
        <ControlLabel>Sub segment of</ControlLabel>
        <FormControl
          name="subOf"
          componentClass="select"
          value={this.state.subOf || ''}
          onChange={this.handleChange}
        >
          <option value="">[not selected]</option>
          {this.props.headSegments.map(segment => (
            <option value={segment._id} key={segment._id}>
              {segment.name}
            </option>
          ))}
        </FormControl>
      </FormGroup>
    );
  }

  renderForm() {
    const { name, description, color } = this.state;

    return (
      <FlexContent>
        <FlexItem count={3}>
          <form onSubmit={this.save}>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl
                name="name"
                required
                value={name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl
                name="description"
                value={description}
                onChange={this.handleChange}
              />
            </FormGroup>
            {this.renderSubOf()}
            <FormGroup>
              <ControlLabel>Color</ControlLabel>
              <FormControl
                name="color"
                type="color"
                value={color}
                onChange={this.handleChange}
              />
            </FormGroup>
          </form>
        </FlexItem>
        <FlexItem count={2} />
      </FlexContent>
    );
  }

  renderContent() {
    const { total } = this.props;

    return (
      <SegmentWrapper>
        <FlexContent>
          <FlexItem count={3}>
            <SegmentContainer>
              <SegmentTitle>{__('Filters')}</SegmentTitle>

              {this.renderConditions()}
              <ContentSpace />
              {this.renderForm()}
            </SegmentContainer>
          </FlexItem>

          <SegmentResult>
            <ResultCount>
              <Icon icon="users" /> {total.byFakeSegment}
            </ResultCount>
            {__('User(s) will recieve this message')}
          </SegmentResult>
        </FlexContent>
      </SegmentWrapper>
    );
  }

  renderFooter() {
    const { contentType } = this.props;

    return (
      <Wrapper.ActionBar
        right={
          <Button.Group>
            <Link to={`/segments/${contentType}`}>
              <Button size="small" btnStyle="simple" icon="cancel-1">
                Cancel
              </Button>
            </Link>
            <Button
              size="small"
              btnStyle="success"
              onClick={this.save}
              icon="checked-1"
            >
              Save
            </Button>
          </Button.Group>
        }
      />
    );
  }

  render() {
    const { contentType, segment } = this.props;

    const breadcrumb = [
      { title: __('Segments'), link: `/segments/${contentType}` },
      { title: segment ? __('Edit segment') : __('New segment') }
    ];

    return (
      <Wrapper
        header={<Wrapper.Header breadcrumb={breadcrumb} />}
        content={this.renderContent()}
        footer={this.renderFooter()}
      />
    );
  }
}

export default SegmentsForm;
