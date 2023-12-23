import Member, { IMember, MemberType } from '../models/Member';

async function getMembersByTears ( year: Number ) {
	const result: Array<MemberType> = [];
	const data: Array<IMember> = await Member.find({
		record: { year: year }
	})
		.sort( 'name' )
		.lean();

	data.forEach( ( member ) => {
		const rec = member.records.find( ( rec ) => rec.year === year );
		if ( rec ) {
			result.push({
				name: member.name,
				image: member.image,
				position: rec.position,
				teams: rec.position
			});
		}
	});
	return result;
}
