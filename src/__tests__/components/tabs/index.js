import { Tabs } from 'components/tabs'

const FakeTabNav = () => <div>Fake Tab Nav</div>

const fakeProps = {
  children: [
    <FakeTabNav>First tab content</FakeTabNav>,
    <FakeTabNav>Second tab content</FakeTabNav>,
  ],
}

describe('<Tabs />', () => {
  it('should render the right elements', () => {
    const { getByTestId } = render(<Tabs {...fakeProps} />)

    expect(getByTestId('tabs')).toBeInTheDocument()
    expect(getByTestId('tabs-nav')).toBeInTheDocument()
    expect(getByTestId('tabs-content')).toBeInTheDocument()
  })

  it('should not render if there are no children', () => {
    const { queryByText } = render(<Tabs />)

    expect(queryByText('Fake Tab Nav')).not.toBeInTheDocument()
  })

  it('should render the correct amount of tabs', () => {
    const { getAllByText } = render(<Tabs {...fakeProps} />)

    expect(getAllByText('Fake Tab Nav')).toHaveLength(fakeProps.children.length)
  })

  it('should render the first tab content as a default', () => {
    const { queryByText } = render(<Tabs {...fakeProps} />)

    expect(queryByText('First tab content')).toBeInTheDocument()
    expect(queryByText('Second tab content')).not.toBeInTheDocument()
  })

  it('should render the content of corresponding active tab', () => {
    const { queryByText } = render(
      <Tabs defaultTab={1} {...fakeProps} />
    )

    expect(queryByText('Second tab content')).toBeInTheDocument()
    expect(queryByText('First tab content')).not.toBeInTheDocument()
  })
})
