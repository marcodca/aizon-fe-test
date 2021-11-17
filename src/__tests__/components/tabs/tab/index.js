import { Tab } from 'components/tabs/tab'

const fakeProps = { title: 'Tab title', onClick: jest.fn() }

describe('<Tab/>', () => {
    it('should render the right elements', () => {
        const { getByTestId, getByText } = render(<Tab {...fakeProps} />)

        expect(getByTestId('tab')).toBeInTheDocument()
        expect(getByText('Tab title')).toBeInTheDocument()
    })

    it('should render with the right class names when active', () => {
        const { getByTestId, getByText } = render(<Tab {...fakeProps} active />)

        expect(getByTestId('tab')).toHaveClass('tab-wrapper active')
        expect(getByText('Tab title')).toHaveClass('title active')
    })

    it('should fire the handle function on click', () => {
        const { getByTestId } = render(<Tab {...fakeProps} active />)

        fireEvent.click(getByTestId('tab'))

        expect(fakeProps.onClick).toHaveBeenCalledTimes(1)
    })
})
